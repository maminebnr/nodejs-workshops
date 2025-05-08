import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto) {
    const newCat = this.catsRepository.create({ ...createCatDto });
    await this.catsRepository.save(newCat);
    return { message: 'cat created successfully', cat: newCat };
  }

  async findAll() {
    return await this.catsRepository.find();
  }

  async findOne(id: number) {
    const foundCat = await this.catsRepository.findOneBy({ id });
    if (!foundCat) {
      throw new NotFoundException('cat not found');
    }
    return foundCat;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    await this.findOne(id)
    await this.catsRepository.update(id, updateCatDto);
    return await this.catsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.findOne(id); 
    await this.catsRepository.softDelete(id);
    const listCat = await this.catsRepository.find();
    return { message: 'cat deleted successfully', listCat };
  }
}

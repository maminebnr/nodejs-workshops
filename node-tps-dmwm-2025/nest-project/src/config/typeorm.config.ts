import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from 'src/todo/entities/todo.entity';

export const typeormConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  port: Number(configService.get('DB_PORT')),
  database: configService.get('DB_NAME'),
  entities: [Todo],
  synchronize: true,
  autoLoadEntities: true,
});

import {
  HttpException,
  HttpStatus,
  INestApplication,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit', () => {
      void app.close();
    });
  }

  async createOrThrowErrorIfUnique<T>(createRequest: Promise<T>): Promise<T> {
    try {
      return await createRequest;
    } catch (e: unknown) {
      const error = e as { code?: string };
      if (error?.code === 'P2002') {
        throw new HttpException('already exist', HttpStatus.BAD_REQUEST);
      } else {
        console.error('unhandledError', error);

        throw new HttpException(
          'unknown error occurred',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async getOrThrowErrorIfNotFound<T>(
    getRequest: Promise<T | null>,
  ): Promise<T> {
    const data = await getRequest;
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }
}

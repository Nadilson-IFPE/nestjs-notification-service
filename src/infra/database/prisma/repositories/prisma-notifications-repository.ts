import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificatioMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificatioMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    });
  }
}

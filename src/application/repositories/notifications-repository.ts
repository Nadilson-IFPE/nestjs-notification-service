import { Notification } from '../entitites/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}

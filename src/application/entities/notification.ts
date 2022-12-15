import { Replace } from '@helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    /* if (content.length < 5) {
      throw new Error();
    } */

    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(recipientId: string) {
    this.props.category = recipientId;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  /* public set createdAt(readAt: Date) {
    this.props.createdAt = readAt;
  } */

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

/* const notification = new Notification({
  content: 'asadsdsadasddasdad',
  category: 'social',
}); */

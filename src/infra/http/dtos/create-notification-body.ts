import { IsNotEmpty, IsUUID, Length } from 'class-validator';

// Adicionado "strictPropertyInitialization: false" no tsconfig.json
// para evitar que a inicialização das propriedades da classe
// seja exigida.
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}

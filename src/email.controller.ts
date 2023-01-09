/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('email')
export class EmailController {
  constructor(private mailService: MailerService) {}

  @Post('html-email')
  async postHTMLEmail(@Body() superHero: any) {
    const response = await this.mailService.sendMail({
      to: superHero.email,
      from: 'tpconnor71@gmail.com',
      subject: 'Confirmation Email',
      template: 'base',
      context: {
  	    superHero: superHero
      },
    });
    return 'success';
  }
}

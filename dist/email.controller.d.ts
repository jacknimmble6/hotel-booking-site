import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailController {
    private mailService;
    constructor(mailService: MailerService);
    postHTMLEmail(superHero: any): Promise<string>;
}

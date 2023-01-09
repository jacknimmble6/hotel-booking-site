"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const hotels_module_1 = require("./hotels/hotels.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const stripe_module_1 = require("./stripe/stripe.module");
const orders_module_1 = require("./orders/orders.module");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const email_controller_1 = require("./email.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.local.env',
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://jacknimmble:nimmble67@cluster0.ooglnnq.mongodb.net/?retryWrites=true&w=majority'),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.sendgrid.net',
                    auth: {
                        user: 'apikey',
                        pass: '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',
                    },
                },
                preview: true,
                template: {
                    dir: (0, path_1.join)(__dirname, 'mails'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            stripe_module_1.StripeModule.forRoot('sk_test_51IiVCyGIYilrPRlMF83KgmWqfIr7pzIiHQmvFCok57ZahWFjvoNxGNnki0pLua5Q8Jh4eaKn9nYmxOaRarffBQyV00fkfRLLjU', { apiVersion: '2022-11-15' }),
            hotels_module_1.HotelsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [app_controller_1.AppController, email_controller_1.EmailController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authServie: AuthService) {}
     
    @Post('signup')
    signup(){
        return this.authServie.signup();
    }

    @Post('Signin')
    signin(){
        return this.authServie.signin();
    }
}
import { Global, Module } from '@nestjs/common';
import { GenerateIDService } from './common-module.service';

@Global()
@Module({
    providers: [{
        useValue: GenerateIDService,
        provide: 'uuid'
    }],
})
export class CommonModule {}
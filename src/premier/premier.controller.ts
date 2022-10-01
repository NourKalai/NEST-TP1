import {Controller,Get,Post,Put,Delete,Patch} from '@nestjs/common';

@Controller('premier')
export class PremierController {
    @Get()
    getPremier() {
         console.log("getPremier");
         return "getpremier";
}
@Post()
postPremier() {
     console.log("postPremier");
     return "postpremier";
}
@Put()
putPremier() {
     console.log("putPremier");
     return "putpremier";
}
@Delete()
deletePremier(){  
      console.log("deletepremier");
      return "deletepremier";
}
@Patch()
patchPremier(){  
      console.log("patchpremier");
    return "patchpremier";
}
}


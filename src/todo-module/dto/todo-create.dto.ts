// import { todostatus } from "../todo-model";

// export class TodoUpdate {
// constructor(
// public name: string,
// public description: string,
// public  status: todostatus)
// {


// }
// }
/* eslint-disable prettier/prettier */
import { todostatus } from "../todo-model";

import {
    IsEnum,
    IsOptional,
    MaxLength,
    MinLength,
} from 'class-validator';
import { ValidationArguments } from 'class-validator';
export class TodoCreate {
    @MinLength(3, {
        message: (validationData: ValidationArguments) => {
            return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]
            }`;
        },
    })
    @MaxLength(10, {
        message: (validationData: ValidationArguments) => {
            return `The size of your ${validationData.property} ${validationData.value} is long, the maximum size of ${validationData.property} is ${validationData.constraints[0]}`;
        },
    })
    name: string;

    @MinLength(10, {
        message: (validationData: ValidationArguments) => {
            return `The size of your ${validationData.property} ${validationData.value} is short, the minimum size of ${validationData.property} is ${validationData.constraints[0]}`;
        },
    })
    description: string;

    createdAt: string;

    @IsEnum(todostatus)
    status: todostatus;
}
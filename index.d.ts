interface Options {
    bold?: boolean;
    color?: string;
    background?: string;

}

export function log(message: any, options: Options = {bold: false, color: '', background: false}, ...args: any[]): void
export function success(message : any, ...args : any[]  ) : void
export function error(message : any, ...args : any[]  ) : void
export function warning(message : any, ...args : any[]  ) : void
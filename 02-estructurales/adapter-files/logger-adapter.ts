import { Logger } from 'jsr:@deno-library/logger';

interface ILoggerAdapter {
    file: string;
    writeLog(message: string): void;
    writeWarning(message: string): void;
    writeError(message: string): void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
    private logger = new Logger();
    private readonly file: string;

    constructor(file: string) {
        this.file = file;
    }

    writeLog(message: string): void {
        this.logger.info(`[${this.file} LOG] ${message}`);
    }

    writeWarning(message: string): void {
        this.logger.warn(`[${this.file} WARNING] ${message}`);
    }

    writeError(message: string): void {
        this.logger.error(`[${this.file} ERROR] ${message}`);
    }
}
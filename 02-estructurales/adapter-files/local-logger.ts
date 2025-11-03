import { COLORS } from '../../helpers/colors.ts';

export class LocalLogger {
    constructor(
        private file: string
    ) {}

    writeLog(message: string): void {
        console.log(`[${this.file} LOG] ${message}`);
    }

    writeError(message: string): void {
        console.error(`[${this.file} ERROR] %c${message}`, COLORS.red);
    }

    writeWarning(message: string): void {
        console.warn(`[${this.file} WARNING] %c${message}`, COLORS.yellow);
    }
}
/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notification {
    send(message: string): void;
}

class BasicNotification implements Notification {
    send(message: string): void {
        console.log(`Notificación básica: ${message}`);
    }
}

abstract class NotificationDecorator implements Notification {
    protected notification: Notification;

    constructor (notification: Notification) {
        this.notification = notification;
    }

    send (message: string): void {
        this.notification.send(message);
    }
}

class EmailDecorator extends NotificationDecorator {
    send (message: string): void {
        super.send(message);
        this.sendEmail(message);
    }

    private sendEmail (message: string): void {
        console.log(`Enviando email: ${message}`);
    }
}

class SMSDecorator extends NotificationDecorator {
    send (message: string): void {
        super.send(message);
        this.sendSMS(message);
    }

    private sendSMS (message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

let notification: Notification = new BasicNotification();

notification = new EmailDecorator(notification);
notification = new SMSDecorator(notification);
console.log(notification)
console.log(notification instanceof NotificationDecorator);
notification.send('ALERTA DE SISTEMA')
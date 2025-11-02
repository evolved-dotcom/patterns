/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  private constructor() {}

  public static getInstance(): DatabaseConnection {
      if(!DatabaseConnection.instance) {
          DatabaseConnection.instance = new DatabaseConnection();
      }
        return DatabaseConnection.instance;
  }

  public connect(): void {
    if (!this.connected) {
        this.connected = true;
        console.log('%cConectado a la base de datos.', COLORS.green);
    }
  }

  public disconnect(): void {
    if (this.connected) {
        this.connected = false;
        console.log('%cDesconectado de la base de datos.', COLORS.red);
    }
  }
}

function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect();

  const db2 = DatabaseConnection.getInstance();
  db2.connect();

  console.log('Son iguales:', db1 === db2);

  db1.disconnect();

  db2.connect();
}

main();

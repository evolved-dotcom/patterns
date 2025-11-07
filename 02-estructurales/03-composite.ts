/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */
interface FileSystemComponent {
    showDetails (indent?: string): void;
}

class File implements FileSystemComponent {
    private name: string;

    constructor (name: string) {
        this.name = name;
    }

    showDetails (indent?: string): void {
        console.log(`${indent}- File: ${this.name}`);
    }
}

class Folder implements FileSystemComponent {
    private name: string;
    private contents: FileSystemComponent[] = [];

    constructor (name: string) {
        this.name = name;
    }

    showDetails (indent?: string = ''): void {
        console.log(`${ indent }+ Folder: ${this.name}`);
        for (const content of this.contents) {
            content.showDetails(indent + '  ');
        }
    }

    add (component: FileSystemComponent): void {
        this.contents.push(component);
    }
}

const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const file3 = new File('file3.txt');
const file4 = new File('file4.txt');

const folder1 = new Folder('Folder 1');
folder1.add(file1);
folder1.add(file2);

const folder2 = new Folder('Folder 2');
folder2.add(file3);

const folder3 = new Folder('Folder 3');
folder3.add(file4);
folder2.add(folder3);

const rootFolder = new Folder('Root Folder');
rootFolder.add(folder1);
rootFolder.add(folder2);

console.log('File System Structure:');
rootFolder.showDetails();
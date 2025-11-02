/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

class CodeEditorState {
    readonly content: string;
    readonly cursorPosition:number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    displayState() {
        console.log(`Content: ${this.content}`);
        console.log(`Cursor Position: ${this.cursorPosition}`);
        console.log(`Unsaved Changes: ${this.unsavedChanges}\n`);
    }

    copyWith({ content, cursorPosition, unsavedChanges }: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        )
    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState) {
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }
        this.history.push(state);
        this.currentIndex++;
    }

    undo(): CodeEditorState | null {
        if (this.currentIndex <= 0) {
            return null;
        }
        this.currentIndex--;
        return this.history[this.currentIndex];
    }

    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }
}

function main() {
    const history = new CodeEditorHistory();

    let state = new CodeEditorState("Initial content", 0, false);
    history.save(state);
    state.displayState();

    state = state.copyWith({ content: "First edit", cursorPosition: 10, unsavedChanges: true });
    history.save(state);
    state.displayState();

    state = state.copyWith({ cursorPosition: 20 });
    history.save(state);
    state.displayState();

    console.log("--- Undo ---");
    state = history.undo()!;
    state.displayState();

    console.log("--- REDO ---");
    state = history.redo();
    state.displayState();
}

main();




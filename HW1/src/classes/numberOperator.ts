export class numberOperator {
    public value!: number;

    /**
     * Инициализирует оператор для последующего обращения к нему.
     */
    constructor(value: number) {
        this.value = value;
    }

    public Evaluate(): number {
        return this.value;
    }
}

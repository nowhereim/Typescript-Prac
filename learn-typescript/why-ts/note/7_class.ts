class Personeri {
    private name: string;
    public age: number;
    protected log: string;
    readonly logs: string;
    constructor(name: string, age: number) {
        console.log('생성 되었습니다.');
        this.name = name
        this.age = age
    }
}

const qq = new Personeri('태환', 100);

// let 태환 = new Personeri('태환',100); // 생성 되었습니다.
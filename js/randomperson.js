class RandomPerson{
    constructor(){
        this.url = "https://randomuser.me/api/?nat=tr";
    }
    
    async getData(){
        const resp = await fetch(this.url);
        const data = await resp.json();

        return data.results[0];
    }
}
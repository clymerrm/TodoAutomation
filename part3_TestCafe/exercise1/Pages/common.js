import {Selector, t} from 'testcafe';

export default class Common {
    constructor() {
        this.title = Selector("title");
    }

    async verifyBrowserTitle(title) {
        await t
            .expect(this.title.innerText).eql(title)
    }
}
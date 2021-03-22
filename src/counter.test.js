import Counter from './counter';
import {shallow} from 'enzyme'
describe("Counter testing",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Counter/>)
    })

    test("the text content of title", ()=>{
        expect(wrapper.find("h1").text()).toContain("App for testing");
    })
    test("render the initial value of state in a div", () => {
        expect(wrapper.find("#counterValue").text()).toBe("0");
    });
})
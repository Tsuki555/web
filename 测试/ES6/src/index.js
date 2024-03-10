import {fn,str} from "./module1"
import {str1,str2} from "./module2"
import m3 from "./module3"

import jq from "jquery"


fn()
console.log(str);
console.log(str1);
console.log(str2);
m3.fn()
console.log(m3.msg);
jq("body").css("backgroundColor","yellow")
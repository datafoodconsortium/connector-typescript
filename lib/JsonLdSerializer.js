var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ObjectSerializer } from "@virtual-assembly/semantizer";
import jsonld from 'jsonld';
export default class JsonLdSerializer {
    constructor(context) {
        this.context = context;
        this.space = undefined;
    }
    setSpace(space) {
        this.space = space;
    }
    process(subject) {
        return __awaiter(this, void 0, void 0, function* () {
            let document = subject.serialize(new ObjectSerializer);
            const compacted = yield jsonld.compact(document, this.context);
            return JSON.stringify(compacted, null, this.space);
        });
    }
}
//# sourceMappingURL=JsonLdSerializer.js.map
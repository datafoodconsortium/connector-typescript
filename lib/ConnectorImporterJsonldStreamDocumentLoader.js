var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import context from "./context.js";
const preloadUrl = "https://www.datafoodconsortium.org/wp-content/plugins/wordpress-context-jsonld/context_1.16.0.jsonld";
export class ConnectorImporterJsonldStreamDocumentLoader {
    load(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (url === preloadUrl) {
                const jsonContext = { "@context": context };
                return jsonContext;
            }
            const response = yield fetch(url);
            if (response.ok) {
                return yield response.json();
            }
            return Promise.reject("Unable to load context from cache.");
        });
    }
}
//# sourceMappingURL=ConnectorImporterJsonldStreamDocumentLoader.js.map
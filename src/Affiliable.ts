import IEnterprise from "./IEnterprise.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Affiliable {

	getAffiliatedOrganizations(): Promise<Array<IEnterprise>>
	;
	affiliateTo(organization: IEnterprise): void;
	leaveAffiliatedOrganization(organization: IEnterprise): void;

}

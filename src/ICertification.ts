/*
 * MIT License
 * 
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
import Nameable from "./Nameable.js"
import IOrganization from "./IOrganization.js"
import Describable from "./Describable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ICertification extends Semanticable, Nameable, Describable {

	addCertificationReference(certificationReference: string): void;

	getCertificationReferences(): string[];

	setCertificationReferences(certificationReferences: string[]): void;

	removeCertificationReference(certificationReference: string): void;

	addCertificationScore(certificationReference: string): void;

	getCertificationScores(): string[];

	setCertificationScores(certificationReferences: string[]): void;

	removeCertificationScore(certificationReference: string): void;

	addOperatorId(operatorId: string): void;

	getOpereratorIds(): string[];

	setOperatorIds(operatorIds: string[]): void;

	removeOperatorId(operatorId: string): void;

	addCertifiedOrganization(certifiedOrganization: IOrganization): void;

	getCertifiedOrganizations(): Promise<IOrganization[]>;

	setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void;

	removeCertifiedOrganization(certifiedOrganization: IOrganization): void;

}

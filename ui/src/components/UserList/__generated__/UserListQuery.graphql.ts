/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserListQueryVariables = {};
export type UserListQueryResponse = {
    readonly allUsers: {
        readonly nodes: ReadonlyArray<{
            readonly name: string | null;
        } | null> | null;
    } | null;
};
export type UserListQuery = {
    readonly response: UserListQueryResponse;
    readonly variables: UserListQueryVariables;
};



/*
query UserListQuery {
  allUsers {
    nodes {
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AllUsers",
    "kind": "LinkedField",
    "name": "allUsers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Nodes",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "faf87308f0d240d97f093354c4fbb227",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery {\n  allUsers {\n    nodes {\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c5ce3659671983be0feecc85ddd4f52';
export default node;

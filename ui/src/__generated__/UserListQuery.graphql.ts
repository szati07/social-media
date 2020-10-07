/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserListQueryVariables = {};
export type UserListQueryResponse = {
    readonly allUsers: {
        readonly nodes: {
            readonly name: string | null;
        } | null;
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
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserListQuery",
    "selections": [
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
            "plural": false,
            "selections": [
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UserListQuery",
    "selections": [
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
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8151e8c029a686751f41c6a94347ead4",
    "id": null,
    "metadata": {},
    "name": "UserListQuery",
    "operationKind": "query",
    "text": "query UserListQuery {\n  allUsers {\n    nodes {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1c5ce3659671983be0feecc85ddd4f52';
export default node;

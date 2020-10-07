import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import enviroment from '../../relay-enviroment';
import {UserListQueryResponse} from './__generated__/UserListQuery.graphql';

const env = enviroment;

interface Props {
    error: Error | null;
    props: any;
    retry: (() => void) | null;
}

const renderFunction: (props: Props) => React.ReactNode = ({ error, props }) => {
    if (error) {
        console.log(error)
        return <div>Error!</div>;
    }
    if (!props) {
        return <div>Loading...</div>;
    }
    return <div>User: {props.allUsers.nodes[0].name}</div>;
}

const UserList = () => {
    return (
        <QueryRenderer
            environment={env}
            query={graphql`
                query UserListQuery {
                    allUsers {
                        nodes {
                            name
                        }
                    }
                }
            `}
            variables={{}}
            render={renderFunction}
        />
    )
}

export default UserList
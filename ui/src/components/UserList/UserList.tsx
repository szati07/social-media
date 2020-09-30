import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-macros';
import enviroment from '../../relay-enviroment';

const env = enviroment;

const UserList = () => {
    return (
        <QueryRenderer
            environment={env}
            query={}
            variables={{}}
            render={({ error, props }: any) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (!props) {
                    return <div>Loading...</div>;
                }
                return <div>User ID: {props.allUsers.name}</div>;
            }}
        />
    )
}

export default UserList
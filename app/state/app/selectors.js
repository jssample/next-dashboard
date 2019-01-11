export const getCreated = state => state.getIn(["app", "created"]);

export const getStatusCode = state => state.getIn(["app", "statusCode"]);

export const getLocale = state => state.getIn(["app", "locale"]);

export const isStarted = state => state.getIn(["app", "isStarted"]);

export const isConnected = state => state.getIn(["app", "isConnected"]);

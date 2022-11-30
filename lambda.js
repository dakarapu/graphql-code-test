import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { serverConfig } from "./server.js";

export const graphqlHandler = startServerAndCreateLambdaHandler(serverConfig.server, serverConfig.serverContext)
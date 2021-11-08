import useMqtt from "./useMqtt";

export default {
    getList: (resource, params) => {

        useMqtt({
            uri: process.env.NEXT_PUBLIC_MQTT_URI,
            options: {
              username: process.env.NEXT_PUBLIC_MQTT_USERNAME,
              password: process.env.NEXT_PUBLIC_MQTT_PASSWORD,
              clientId: process.env.NEXT_PUBLIC_MQTT_CLIENTID,
            },
            topicHandlers: incommingMessageHandlers.current,
            onConnectedHandler: (client) => setMqttClient(client),
          });

        return 
    },

    getOne: (resource, params) =>{
        return ();
    }

    getMany: (resource, params) => {
        return ();
    },

    getManyReference: (resource, params) => {
        return ();
    },

    update: (resource, params) =>{
        return ();
    },

    create: (resource, params) =>{
        return ();
    },

    delete: (resource, params) =>{
        return ();
    },

    deleteMany: (resource, params) => {
        return ();
    }
}
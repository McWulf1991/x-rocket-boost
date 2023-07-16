import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

const PLUGIN_NAME = 'Rocket Booster';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, () => {
    alt.log(`~lb~Plugin ${PLUGIN_NAME} wurde gestartet!`)
})
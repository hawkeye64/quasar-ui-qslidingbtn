<template>
  <q-page padding class="q-pa-md q-gutter-sm">

    <div style="max-width: 500px;">
      <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-space />
        <q-sliding-btn-group
          v-model="model"
          unelevated
        >
          <q-sliding-btn
            name="1"
            icon="bookmark"
            label="Bookmark"
            text-color="yellow-8"
          />
          <q-sliding-btn
            name="2"
            icon="event"
            label="Calendar"
            text-color="purple-11"
          />
          <q-sliding-btn
            name="3"
            icon="alarm"
            label="Alarm"
            text-color="orange-8"
          />
          <q-sliding-btn
            name="4"
            icon="directions"
            label="Directions"
          />
        </q-sliding-btn-group>
      </q-toolbar>
    </div>

    <div style="max-width: 500px;">
      <q-toolbar class="bg-accent text-white q-my-md shadow-2">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-space />
        <q-sliding-btn-group
          v-model="model"
          padding="2px"
          unelevated
        >
          <q-sliding-btn
            name="1"
            icon="bookmark"
            label="Bookmark"
            text-color="yellow-8"
          />
          <q-sliding-btn
            name="2"
            icon="event"
            label="Calendar"
            text-color="purple-11"
          />
          <q-sliding-btn
            name="3"
            icon="alarm"
            label="Alarm"
            text-color="orange-8"
          />
          <q-sliding-btn
            name="4"
            icon="directions"
            label="Directions"
          />
        </q-sliding-btn-group>
      </q-toolbar>
    </div>

    <div style="max-width: 500px;">
      <q-toolbar class="bg-accent text-white q-my-md shadow-2">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-sliding-btn-group
          v-model="model"
          padding="2px"
          unelevated
          class="row justify-between items-center full-width"
        >
          <q-sliding-btn
            name="1"
            icon="bookmark"
            label="Bookmark"
            text-color="yellow-8"
          />
          <q-sliding-btn
            name="2"
            icon="event"
            label="Calendar"
            text-color="purple-11"
          />
          <q-sliding-btn
            name="3"
            icon="alarm"
            label="Alarm"
            text-color="orange-8"
          />
          <q-sliding-btn
            name="4"
            icon="directions"
            label="Directions"
          />
        </q-sliding-btn-group>
      </q-toolbar>
    </div>

    <div style="max-width: 500px;">
      <q-toolbar class="bg-accent text-white q-my-md shadow-2">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-sliding-btn-group
          v-model="model"
          padding="2px"
          unelevated
          multiple
          class="row justify-between items-center full-width"
        >
          <q-sliding-btn
            name="1"
            icon="bookmark"
            label="Bookmark"
            text-color="yellow-8"
          />
          <q-sliding-btn
            name="2"
            icon="event"
            label="Calendar"
            text-color="purple-11"
          />
          <q-sliding-btn
            name="3"
            icon="alarm"
            label="Alarm"
            text-color="orange-8"
          />
          <q-sliding-btn
            name="4"
            icon="directions"
            label="Directions"
          />
        </q-sliding-btn-group>
      </q-toolbar>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      model: '1'
    }
  }
}
</script>

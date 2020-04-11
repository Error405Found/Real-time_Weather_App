<script>
  import Card from "./Card.svelte";
  import { db } from "./firebase";

  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  let data = {};

  let dataStore = writable(0);

  let docRef;

  onMount(() => {
    this;

    docRef = db.collection("cities").doc("ber");

    docRef.onSnapshot(v => {
      data = v.data();

      dataStore.set(data.temperature * 3);
    });
  });

  $: {
  }

  function handler() {}
</script>

<main>

{ $dataStore }
<!-- {#if data} -->

  <Card {...data} />
<!-- {/if} -->
</main>
























<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

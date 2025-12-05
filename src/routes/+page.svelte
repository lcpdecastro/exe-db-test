<script lang="ts">
  import { enhance } from '$app/forms';

  let { data } = $props();
</script>

<form method="post" use:enhance>
  <button>Add person</button>
</form>

{#each data.people as person}
  <p>
    { person.id }
    { '\t' }
    { person.age }
  </p>
{/each}

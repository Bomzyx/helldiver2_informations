<script lang="ts">

  let promise = getCampaign();
  
  async function getCampaign() {
      const response = await fetch('https://api-hellhub-collective.koyeb.app/api/events');
      const data = await response.json()
  
      if (response.ok) {
          console.log(data)
          return data
      } else {
          throw new Error('Fetching failed!')
      }
      
  }
</script>

<div>
  {#await promise}
  <div class="flex justify-center items-center ">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  {:then campaigns} 
    {#each campaigns.data as campaign}
      {campaign.message}
    {/each}
  {/await}
</div>
  
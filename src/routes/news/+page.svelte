<script lang="ts">

let promise = getMission();

async function getMission() {
    const response = await fetch('https://helldiverstrainingmanual.com/api/v1/war/news');
    const data = await response.json()

    if (response.ok) {
        console.log(data)
        return data
    } else {
        throw new Error('Fetching failed!')
    }
    
}
</script>

    
    {#await promise }
    <div class="flex justify-center items-center ">
        <span class="loading loading-spinner loading-lg"></span>
    </div>
    {:then missions}
        <div>

        <div>
            <img src="/helldivers.jpeg" alt="Helldivers 2">
        </div>

        <div class="text-3xl p-2">
            Helldiver 2 News
        </div>

        {#each missions as mission}
            <div class="p-4">
                <h4>Order ID {mission.id}</h4>
                <li>{mission.message}</li>
            </div>
        {/each}
        

        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

<script lang="ts">
import type { PageData } from "../$types";
export let data: PageData;
</script>

    {#await data.news }
    <div class="flex justify-center items-center ">
        <span class="loading loading-spinner loading-lg"></span>
    </div>
    {:then news}
        <div>

        <div>
            <img src="/helldivers.jpeg" alt="Helldivers 2">
        </div>

        <div class="text-4xl underline p-3">
            Helldiver 2 News
        </div>

        {#each news as news }
            <div class="p-4">
                <h4>Order ID {news.id}</h4>
                <li>{news.message}</li>
            </div>
        {/each}
        

        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

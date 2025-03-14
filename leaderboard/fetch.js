const { Queue } = require('bullmq')

const queue = new Queue('apertre', {
    connection: {
        host: process.env.VALKEY_HOST,
        port: process.env.VALKEY_PORT,
        username: 'default',
        password: process.env.VALKEY_PASSWORD
    }
})


async function fetchLeaderboard() {
    try {
        const job = await queue.getJob('leaderboard')
        if (!job) console.log('Leaderboard not found.')
        else {
            writeFile(job.data)
            console.log('Leaderboard updated.')
        }
    }
    catch (err) {
        console.error(err)
    }
    finally {
        await queue.close()
    }
}

fetchLeaderboard()
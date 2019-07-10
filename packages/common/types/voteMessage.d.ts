interface VoteMessage {
  userId: string,
  heat: number // 热度值：正数为火，负数为水
}
export {
  VoteMessage
}
const calculateLimitTime = (date) => {
  let limitTime = '';
  const diffTime = new Date(date).getTime() - new Date().getTime();
  if (diffTime > 0) {
    const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor(diffTime / (1000 * 60 * 60)) % 24;
    const diffMinute = Math.floor(diffTime / (1000 * 60)) % 60;
    limitTime = `残り${diffDay}日${diffHour}時間${diffMinute}分`;
  } else {
    limitTime = '期限を過ぎています。';
  }
  return limitTime;
};

export default calculateLimitTime;

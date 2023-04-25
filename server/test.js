import bcrypt from 'bcryptjs';
const token = '$2a$10$0OSo0iGPz/6Vhte0z33kkO7yO3IcINDqAShurnlBYh3srA83SIqBe';
const token2 = '$2a$10$0OSo0iGPz/6Vhte0z33kkO7yO3IcINDqAShurnlBYh3srA83SIqBe';
const isValid = await bcrypt.compare(token, token2);

console.log('token', isValid);

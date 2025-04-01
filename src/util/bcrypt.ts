import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
    const SALT = bcrypt.genSaltSync();
    const hash: string = bcrypt.hashSync(rawPassword, SALT);
    return hash;
}

export function comparePassword(raw: string, hash: string) {
    const match: boolean = bcrypt.compareSync(raw, hash);
    return match;
}
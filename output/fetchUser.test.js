import fetch from 'node-fetch';
import { fetchUser } from './fetchUser';

jest.mock('node-fetch');

describe('fetchUser', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should throw an error if userId is null', async () => {
    await expect(fetchUser(null)).rejects.toThrowError('userId is required');
  });

  it('should throw an error if userId is empty', async () => {
    await expect(fetchUser('')).rejects.toThrowError('userId is required');
  });

  it('should throw an error if userId is undefined', async () => {
    await expect(fetchUser(undefined)).rejects.toThrowError('userId is required');
  });

  it('should make a GET request to the correct URL', async () => {
    const userId = '123';
    fetch.mockResolvedValueOnce({ ok: true, json: () => ({}) });
    await fetchUser(userId);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`https://api.example.com/users/${userId}`);
  });

  it('should return the JSON response', async () => {
    const userId = '123';
    const response = { id: 1, name: 'John Doe' };
    fetch.mockResolvedValueOnce({ ok: true, json: () => response });
    const result = await fetchUser(userId);
    expect(result).toEqual(response);
  });

  it('should throw an error if the response is not OK', async () => {
    const userId = '123';
    fetch.mockResolvedValueOnce({ ok: false, status: 404 });
    await expect(fetchUser(userId)).rejects.toThrowError('HTTP error: 404');
  });

  it('should handle network errors', async () => {
    const userId = '123';
    fetch.mockRejectedValueOnce(new Error('Network error'));
    await expect(fetchUser(userId)).rejects.toThrowError('Network error');
  });
});
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Expense = {
  id: string;
  name: string;
  amount: number;
  paidBy: string;
  type: 'shared' | 'personal';
};

export type Group = {
  id: string;
  name: string;
  people: string[];
  expenses: Expense[];
};

// Save all groups
export async function saveGroups(groups: Group[]) {
  await AsyncStorage.setItem('groups', JSON.stringify(groups));
}

// Load all groups
export async function loadGroups(): Promise<Group[]> {
  const data = await AsyncStorage.getItem('groups');
  return data ? JSON.parse(data) : [];
}
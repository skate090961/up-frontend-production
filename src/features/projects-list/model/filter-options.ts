import { Option } from '@/shared/ui/app-select';

export const techOpts: Option[] = [
    { value: 'all', label: 'Все технологии' },
    { value: 'html/css', label: 'HTML/CSS' },
    { value: 'javascript', label: 'JavaScript' },
];

export const subscriptionOpts: Option[] = [
    { value: 'all', label: 'Все виды' },
    { value: 'free', label: 'Бесплатно' },
    { value: 'premium', label: 'Premium' },
];

export const complexityOpts: Option[] = [
    { value: 'all', label: 'Все уровни' },
    { value: 'easy', label: 'Легкий' },
    { value: 'medium', label: 'Средний' },
    { value: 'hard', label: 'Тяжелый' },
];
